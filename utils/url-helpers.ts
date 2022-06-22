export const imageUrl = (file: string) => {
    return process.env.NODE_ENV !== 'development' ? `/_next/static/${file}` : `/${file}`;
};

export const linkUrl = (path: string) => {
    return `${path}`;
};
