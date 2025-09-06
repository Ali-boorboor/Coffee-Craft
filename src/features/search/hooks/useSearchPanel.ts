import { isTextInputValueValid } from "@/utils/inputValidations";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";

const useSearchPanel = () => {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const redirectToSearchPage = () => {
    if (isTextInputValueValid({ inputValue: searchValue })) {
      const searchQuery = encodeURIComponent(searchValue);

      router.push(`/search?q=${searchQuery}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputOnEnterPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    const isEnterPressed = e.code === "Enter";

    if (isEnterPressed) {
      redirectToSearchPage();
    }
  };

  return {
    searchValue,
    redirectToSearchPage,
    handleInputChange,
    handleInputOnEnterPressed,
  };
};

export default useSearchPanel;
