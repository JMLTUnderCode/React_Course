import * as React from "react";
import { type FiltersContextProps } from "../types";

export const FiltersContext = React.createContext<FiltersContextProps | undefined>(undefined);