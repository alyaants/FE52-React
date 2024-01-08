import { ChangeEvent, LegacyRef, forwardRef } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";
import React from "react";
import { useThemeContext } from "../../context/theme";
import { Theme } from "../../@types";

interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  onСhange: (value: string) => void;
  disabled?: boolean;
  errorText?: string;
  textarea?: boolean;
  // ref: LegacyRef<HTMLInputElement | null>;
}

const Input = React.forwardRef((props: InputProps, ref) => {

  const { themeValue } = useThemeContext();

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onСhange(event.target.value);
  };

  const inputProps = {
    onChange: onInputChange,
    value: props.value,
    placeholder: props.placeholder,
    className: classNames(styles.input, {
      [styles.disabled]: props.disabled,
      [styles.errorInput]: props.errorText,
    }),
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: themeValue === Theme.Dark,
      })}
    >
      <div className={styles.title}>{props.title}</div>
      {props.textarea ? (
          <textarea
            ref={ref as LegacyRef<HTMLTextAreaElement> | null}
            {...inputProps}
          />
        ) : (
          <input
            ref={ref as LegacyRef<HTMLInputElement> | null}
            {...inputProps}
          />
        )}
      {props.errorText && (
        <div className={styles.errorText}>{props.errorText}</div>
      )}
    </div>
  );
});
export default Input;
