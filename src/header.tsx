import React, { FC } from "react";
import { Profile } from "./types";

type Props = {
  profile: Profile;
};
export const Header: FC<Props> = (props) => (
  <header>
    {props.profile.pages.map((page) => (
      <button>{page.name}</button>
    ))}
    <span>Welcome {props.profile.user.name}</span>
  </header>
);
