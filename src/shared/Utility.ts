/**
 * Check if given data is not empty
 * @param data Data Payload
 * @return {boolean} true/false
 */
export const isNotEmpty = (data?: string): boolean => {
    return data !== undefined && data !== null && data.trim().length > 0;
};

/**
 * Check if given object is valid
 * @param data Data Payload
 * @return {boolean} true/false
 */
export const isValidObject = (data?: any): boolean => {
    return data !== undefined && data !== null;
};