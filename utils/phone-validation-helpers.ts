import libphonenumber from 'google-libphonenumber';

// eslint-disable-next-line import/prefer-default-export
export const validateAreaCode = (type: string, input: string) => {
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

    return type === 'text' || type === 'phone'
        ? phoneUtil.isValidNumberForRegion(phoneUtil.parse(input, 'CA'), 'CA')
        : true;
};

export const phoneFormatter = (number: string) => {
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const phoneNumberFormat = libphonenumber.PhoneNumberFormat;
    const phoneNumber = phoneUtil.parse(number, 'CA');

    return phoneUtil.format(phoneNumber, phoneNumberFormat.NATIONAL);
};
