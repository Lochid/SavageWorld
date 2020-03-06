export const PUT_CURRENT_ADDRESS = 'PUT_CURRENT_ADDRESS';

export interface PutCurrentAddressData {
    type: 'PUT_CURRENT_ADDRESS';
    address: string;
}

export const putCurrentAddress = (address: string): PutCurrentAddressData => ({
    type: PUT_CURRENT_ADDRESS,
    address
});
