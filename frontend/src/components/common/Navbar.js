import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Button from "./Button";
// import Input from "./Input";

const NavbarBlock = styled.div`
  display: flex;
  height: 4rem;
  width: 100%;
  background: DodgerBlue;
  justify-content: space-between;
`;

const NavbarItemBlock = styled.div`
  display: flex;
  height: 4rem;
`;

const NavbarItem = styled.div`
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: DeepSkyBlue;
  margin: 0 0.5rem 0 0.5rem;
  opacity: 0.3;
  ${(props) =>
    props.now &&
    css`
      opacity: 1;
    `}
  :hover {
    cursor: pointer;
  }
`;

// cursor: auto / default(화살표) / pointer / wait

const Navbar = ({ changeModal, onLogout }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const isLogin = user === null ? false : true;
  const userName = user === null ? '' : user.username;
  const navItems = [
    { name: '오늘의 타자', toLink: '/today' },
    { name: '소스 목록', toLink: '/games' },
    { name: '커뮤니티', toLink: '/community' },
    // { name: '내 페이지', toLink: '/profile' },
    { name: '랭킹', toLink: '/rank' },
    { name: 'ADMIN', toLink: '/admin' },
  ];
  const history = useHistory();
  // const nowActive = window.location.pathname
  const [nowActive, setNowActive] = useState(window.location.pathname);
  useEffect(() => {
    setNowActive(window.location.pathname);
  }, [history]);
  return (
    <>
      <NavbarBlock>
        <div>
          <NavbarItemBlock>
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {nowActive === item.toLink ? (
                  <NavbarItem
                    key={item.name}
                    onClick={() => history.push(item.toLink)}
                  >
                    {item.name}
                  </NavbarItem>
                ) : (
                  <NavbarItem
                    key={item.name}
                    onClick={() => history.push(item.toLink)}
                  >
                    {item.name}
                  </NavbarItem>
                )}
              </React.Fragment>
            ))}
          </NavbarItemBlock>
        </div>
        <div>
          <NavbarItemBlock>
            {isLogin && <NavbarItem onClick={() => history.push('/profile')}>{userName}</NavbarItem>}
            {isLogin ? (
              <NavbarItem onClick={onLogout}>로그아웃</NavbarItem>
            ) : (
              <NavbarItem onClick={() => changeModal('login')}>
                로그인
              </NavbarItem>
            )}
          </NavbarItemBlock>
        </div>
      </NavbarBlock>
    </>
  );
};

export default Navbar;
