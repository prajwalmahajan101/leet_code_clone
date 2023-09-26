import { BsCheckLg } from "react-icons/bs";

interface SettingsListItemProps {
  fontSize: string;
  selectedOption: string;
  handleFontSizeChange: (fontSize: string) => void;
}

const SettingsListItem: React.FC<SettingsListItemProps> = ({
  fontSize,
  selectedOption,
  handleFontSizeChange,
}) => {
  return (
    <li className="relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-label-2 dark:text-dark-label-2 hover:bg-dark-fill-3 rounded-lg">
      <div
        className={`flex h-5 flex-1 items-center pr-2 ${
          selectedOption === fontSize ? "font-medium" : ""
        }`}
        onClick={() => handleFontSizeChange(fontSize)}
      >
        <div className="whitespace-nowrap">{fontSize}</div>
      </div>
      <span
        className={`text-blue dark:text-dark-blue flex items-center pr-2 ${
          selectedOption === fontSize ? "visible" : "invisible"
        }`}
      >
        <BsCheckLg />
      </span>
    </li>
  );
};

export default SettingsListItem;
