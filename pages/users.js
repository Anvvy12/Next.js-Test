import { useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const users = ({ users }) => {
  return (
    <MainContainer keywords={"users list next js"}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} legacyBehavior>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default users;

export async function getStaticProps(context) {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
