import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import {
	LettersAnimated,
	Wrapper,
} from 'PublicComponents/Landing/Logo/Parts';
import {
	Container,
	LogoContainer,
	Links,
	ItemContainer,
	LinkButton,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const letterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const linkVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const GET_ARTICLE = gql`
    {
        getArticle(id: "5d949e13c31d83415c1bd39b") {
            title
            description
            created
        }
    }
`;

const Nav = () => {
	const { loading, error, data } = useQuery(GET_ARTICLE);
	
	console.log('GQL: ', loading, error, data);

	const [animate, setAnimate] = useState('hidden');
	useEffect(() => setAnimate('visible'), []);

	const router = useRouter();
	const { id } = router.query;
	const MenuItems = [
		{
			name: 'Article',
			sub: [
				{
					name: 'Le cristal de roche',
					link: '#section0',
				},
				{
					name: 'Le cristal de roche 1',
					link: '#section1',
				},
				{
					name: 'Le cristal de roche 2',
					link: '#section2',
				},
			],
		},
		{
			name: 'Blog',
			link: '/blog',
		},
		{
			name: 'Produits',
			sub: [
				{
					name: 'Tous les produits',
					link: '/products',
				},
				{
					name: 'Nouveautes',
					link: '/products/news',
				},
				{
					name: 'Collections',
					link: '/products/collections',
				},
				{
					name: 'Bracelets',
					link: '/products/bracelets',
				},
				{
					name: "Boucles d'oreilles",
					link: '/products/earrings',
				},
				{
					name: 'Pour enfants',
					link: '/products/kids',
				},
				{
					name: 'Autres',
					link: '/products/others',
				},
			],
		},
	];
	// if (router.pathname.includes('article')) {
	// 	console.log('Im in article');
	// }
	
	const [menuOpen, setMenuOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const handleMenuClick = index => (e) => {
		if (!MenuItems[index].sub || !MenuItems[index].sub.length) router.push(MenuItems[index].link);
		else {
			if (index === false) {
				setMenuOpen(false);
				setAnchorEl(null);
			} else {
				setMenuOpen(index);
				setAnchorEl(e.currentTarget);
			}
		}
	};
	const handleSubMenuClick = link => () => {
		setMenuOpen(false);
		router.push(link);
	};

	console.log(anchorEl);
	return (
		<Container>
			<LogoContainer>
				<Wrapper>
					{LettersAnimated.map((Letter, index) => (
						<Letter
							initial="hidden"
							key={`letter-animated-${index}`}
							variants={letterVariants}
							animate={animate}
							transition={{ delay: 0.3 * index }}
						/>
					))}
				</Wrapper>
			</LogoContainer>
			<Links>
				{MenuItems.map((item, index) => (
					<ItemContainer
						initial="hidden"
						key={`link-animated-${index}`}
						variants={linkVariants}
						animate={animate}
						transition={{ delay: 0.2 * index }}
					>
						<LinkButton
							onClick={handleMenuClick(index)}
							// ref={anchorRefArray[index]}
							aria-controls={menuOpen === index ? 'menu-list-grow' : undefined}
							aria-haspopup={(item.sub && item.sub.length) ? 'true' : 'false'}
						>
							{item.name}
						</LinkButton>
					</ItemContainer>
				))}
			</Links>
			{(MenuItems[menuOpen] && MenuItems[menuOpen].sub) && (
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{
						horizontal: 'center',
						vertical: 'bottom',
					}}
					transformOrigin={{
						horizontal: 'center',
						vertical: 'bottom',
					}}
					PaperProps={{
						style: { transform: 'translate(0px, 42px)' }
					}}
					TransitionComponent={Fade}
					open={menuOpen !== false}
					onClose={handleMenuClick(false)}
				>
					{MenuItems[menuOpen].sub.map((subItem, subIndex) => (
						<MenuItem
							key={`link-sub-${menuOpen}-${subIndex}`}
							onClick={handleSubMenuClick(subItem.link)}
						>
							{subItem.name}
						</MenuItem>
					))}
				</Menu>
			)}
		</Container>
	);
};
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.whyDidYouRender = true;

export default Nav;
