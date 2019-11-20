import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(({ height, ...props }) => <div {...props} />)`
  position: absolute;
  height: ${({height}) => height}px;
  width: 100%;
`;
export const Content = styled.div.attrs(({ position, height }) => ({
	style: {
		top: `${position}px`,
		boxShadow: position < height ?
			'0 0px 6px black' :
			'none',
	}
}))`
	position: absolute;
	height: 100%;
	width: 100vw;
	left: 0;
`;
export const Image = styled(({ url, ...props }) => <motion.div {...props} />)`
	background: ${({ url }) => url};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	position: relative;
	transform-origin: left bottom;
  &:after {
  	content: ' ';
  	position: absolute;
  	width: 100%;
  	height: 25%;
  	bottom: 0;
  	left: 0;
  	background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
  }
`;
export const Title = styled.div`
	position: absolute;
	bottom: 0;
	font-size: 1.8rem;
  font-weight: 600;
  padding: 16px 24px;
	color: white;
	text-shadow: 0 3px 6px rgba(0,0,0,0.5);
`;
export const ResizeBtn = styled(({ ...props }) => <motion.div {...props} />)`
	position: fixed;
	right: 12px;
	top: 72px;
	width: 48px;
	height: 48px;
	cursor: pointer;
	z-index: 2;
	> button {
	  color: rgba(255, 255, 255, 0.6);
	  background: radial-gradient(circle,rgba(0,0,0,0.5) -200%,rgba(0,0,0,0) 60%);
	}
`;

/*
Layout https://events.google.com/flutter-interact/

et aussi pour flutter
*/