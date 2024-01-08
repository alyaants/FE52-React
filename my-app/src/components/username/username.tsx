import styles from "./username.module.scss";
interface UsernameProps {
  userName: string;
}
const UserName = (props: UsernameProps) => {
    if (!props.userName) {
        return null;
      }
  function firstLetters(props: UsernameProps) {
    return props.userName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.letters}>{firstLetters(props)}</div>
      <span className={styles.userName}>{props.userName}</span>
    </div>
  );
};

export default UserName;
