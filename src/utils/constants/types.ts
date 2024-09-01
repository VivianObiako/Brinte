import { BaseInputProps } from '@/components/inputs/BaseInput';

export interface SelectOption {
  value: string;
  label: string;
}

export interface CustomSelectProps extends Omit<BaseInputProps, 'value' > {
  value: string;
  options: SelectOption[];
}