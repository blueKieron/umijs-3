import { NavLink } from 'umi';

export default function Nav() {
  return (
    <>
      <NavLink to="/goods" activeStyle={{ color: '#000' }}>
        商品
      </NavLink>
      <NavLink to="/login" activeStyle={{ color: '#000' }}>
        登录
      </NavLink>
      <NavLink to="/reg" activeStyle={{ color: '#000' }}>
        注册
      </NavLink>
    </>
  );
}
