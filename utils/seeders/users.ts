import { User, UserWithoutPassword } from "../../types/entities";

export const usersSeeder: UserWithoutPassword[] = [
  {
    id: "b1cbeeb6-6672-4ccd-98ff-bb78381d5926",
    username: "Ahsan Gaming",
    email: "ahsanaz461@gmail.com",
    bio: "Aku suka susunya",
    avatar: null,
    createdAt: new Date(),
  },
  {
    id: "b2dbexba-6672-1cax-18bf-zb72381d592x",
    username: "Chef Ahsan",
    email: "chef_ahsan@gmail.com",
    bio: "Private Chef That Passionate about food and life 🥘🍲🍝🍱",
    avatar: null,
    createdAt: new Date(),
  },
  {
    id: "16c9d102-c7e8-4bd3-9210-4ef1b2221dc2",
    username: "gilangxv",
    email: "gilangxv@gmail.com",
    bio: "Private Chef That Passionate about food and life 🥘🍲🍝🍱",
    avatar: null,
    createdAt: new Date(),
  },
  {
    id: "3a425112-04e0-4acf-a465-18c8342af45d",
    username: "benigga",
    email: "benigga@gmail.com",
    bio: "Private Chef That Passionate about food and life 🥘🍲🍝🍱",
    avatar: null,
    createdAt: new Date(),
  },
  {
    id: "70d1c5a7-febf-4600-a64f-3dfa68041cc5",
    username: "aditroll",
    email: "aditroll@gmail.com",
    bio: "Private Chef That Passionate about food and life 🥘🍲🍝🍱",
    avatar: null,
    createdAt: new Date(),
  },
  {
    id: "728df0f8-8278-448f-b171-ab9e831979a9",
    username: "relliezhr",
    email: "relliezhr@gmail.com",
    bio: "Private Chef That Passionate about food and life 🥘🍲🍝🍱",
    avatar: null,
    createdAt: new Date(),
  },
];

export const singleUser: User = {
  id: "593c9eea-580e-4282-bd66-70eb5ef83cc8",
  username: "ahsanzizan",
  email: "contact@ahsanzizan.xyz",
  password: "asikasik69",
  bio: "",
  avatar: null,
  createdAt: new Date(),
};
