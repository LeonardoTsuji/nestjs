import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function converterEmCentavos(valor: number) {
  if (valor) return valor * 100;
}

export function removerCaracteresEspeciais(text: string) {
  if (text) return text.replace(/[^\d]/g, '');

  return text;
}

function validarCPF(cpf) {
  cpf = removerCaracteresEspeciais(cpf);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const digits = cpf.split('').map(Number);

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }

  let result = (sum * 10) % 11;
  if (result === 10 || result === 11) {
    result = 0;
  }

  if (result !== digits[9]) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }

  result = (sum * 10) % 11;
  if (result === 10 || result === 11) {
    result = 0;
  }

  if (result !== digits[10]) {
    return false;
  }

  return true;
}

function validarCNPJ(cnpj) {
  cnpj = removerCaracteresEspeciais(cnpj);

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }

  const digits = cnpj.split('').map(Number);

  // First verification digit
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (5 + (i % 8));
  }

  let result = sum % 11;
  result = result < 2 ? 0 : 11 - result;

  if (result !== digits[12]) {
    return false;
  }

  // Second verification digit
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += digits[i] * (6 + (i % 8));
  }

  result = sum % 11;
  result = result < 2 ? 0 : 11 - result;

  if (result !== digits[13]) {
    return false;
  }

  return true;
}

export function ValidarDocumento(
  property?: 'CPF' | 'CNPJ',
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'VALIDAR_DOCUMENTO',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          if (typeof value != 'string') {
            return false;
          }
          const documento = removerCaracteresEspeciais(value);
          if (relatedPropertyName == null) {
            return documento.length > 11
              ? validarCNPJ(documento)
              : validarCPF(documento);
          } else if (relatedPropertyName == 'CPF') {
            return validarCPF(documento);
          } else {
            return validarCNPJ(documento);
          }
        },
      },
    });
  };
}
