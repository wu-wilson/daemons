import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { Daemon } from "../../pages/workshop/Workshop";
import styles from "./dropdown.module.scss";

const Dropdown = ({
  options,
  value,
  setValue,
  width,
  height,
}: {
  options: Daemon[];
  value: Daemon;
  setValue: (val: Daemon) => void;
  width: number | string;
  height: number;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  // Close dropdown menu when the user clicks outside.
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={styles["container"]}
      style={{ width: width, height: height }}
      onClick={toggle}
    >
      {value.name}
      {open ? (
        <RiArrowUpSFill className={styles["arrow"]} size={20} />
      ) : (
        <RiArrowDownSFill className={styles["arrow"]} size={20} />
      )}
      {open ? (
        <div className={styles["menu"]} style={{ width: width, top: height }}>
          {options.map((option) => (
            <div
              key={option.id}
              className={styles["option"]}
              onClick={() => setValue(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
