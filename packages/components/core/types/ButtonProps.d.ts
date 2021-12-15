/// <reference types="react" />
export default interface DefaultProps {
    props?: React.ReactNode;
    color?: 'primary' | 'secondary';
    variant?: 'link' | 'outline' | 'contained' | 'text';
    size?: 'small' | 'medium' | 'large';
    shape?: 'square' | 'circle' | 'round';
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    isLoading?: boolean;
}
