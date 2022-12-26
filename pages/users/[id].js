import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default ({ user }) => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div keywords={`${user.name}`}>
      <MainContainer className={styles.user}>
        <h1 className={styles.user}>User with id {query.id}</h1>
        <div>Name of user {user.name}</div>
      </MainContainer>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
