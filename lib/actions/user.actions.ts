'use server'

import { ID, Account } from 'node-appwrite';
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from 'next/headers';
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password)

    return parseStringify(response)
  } catch (error) {
    console.warn("Error", error);
  }
}

export const signUp = async (userdata: SignUpParams) => {
  const { email, password, firstName, lastName } = userdata

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
    const session = await account.createEmailPasswordSession(email, password,);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount)

  } catch (error) {
    console.warn("Error", error);
  }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user)
  } catch (error) {
    return null;
  }
}

export const logOut = async () => {
  try {
    const { account } = await createSessionClient()

    cookies().delete('appwrite-session')

    await account.deleteSession('current')
    return true
  } catch (error) {
    console.warn(error);
    return null
  }
} 