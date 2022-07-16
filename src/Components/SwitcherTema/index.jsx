import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';
import styled from "styled-components";


const IconeLamp = styled(Icone)`

`;

const claro = <IconeLamp src={ThemeOn} alt="Tema Claro" />;
const escuro = <IconeLamp src={ThemeOff} alt="Tema Escuro" />;

export default ({tema}) =>(tema ? escuro : claro);