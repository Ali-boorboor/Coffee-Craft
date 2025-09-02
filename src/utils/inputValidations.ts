const TEXT_INPUT_REGEX = /^[a-zA-Z0-9\s]+$/;

type isTextInputValueValidProps = { inputValue: string };

const isTextInputValueValid = ({ inputValue }: isTextInputValueValidProps) => {
  const trimmedValue = inputValue.trim();
  const isSearchValueValid = TEXT_INPUT_REGEX.test(trimmedValue);

  return isSearchValueValid;
};

export { isTextInputValueValid };
