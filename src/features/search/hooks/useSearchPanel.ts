import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { useSearchStore } from "@/features/search/stores/searchStores";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { searchValidations } from "@/validations";
import { useRouter } from "next/router";

const useSearchPanel = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const { isSearchInputAvailable, setIsSearchInputAvailable } =
    useSearchStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputOnEnterPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    const isEnterPressed = e.code === "Enter";

    if (isEnterPressed) {
      redirectToSearchPage();
    }
  };

  const closeSearchPanel = () => setIsSearchInputAvailable(false);

  const redirectToSearchPage = async () => {
    const searchQuery = encodeURIComponent(searchValue);

    const schema = validationSchema({ search: searchValidations });

    const isValid = await validateInputValues({
      values: { search: searchQuery },
      schema,
    });

    if (!isValid) return;

    router.push(`/search?product_name=${searchQuery}`);

    setSearchValue("");

    closeSearchPanel();
  };

  return {
    searchValue,
    closeSearchPanel,
    isSearchInputAvailable,
    redirectToSearchPage,
    handleInputChange,
    handleInputOnEnterPressed,
  };
};

export default useSearchPanel;
