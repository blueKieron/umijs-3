import { NavLink } from 'umi';

export default function Meau() {
  return (
    <>
      <NavLink to="/goods/1" activeStyle={{ color: '#000' }}>
        商品分类1
      </NavLink>
      <NavLink to="/goods/2" activeStyle={{ color: '#000' }}>
        商品分类2
      </NavLink>
      <NavLink to="/goods/3" activeStyle={{ color: '#000' }}>
        商品分类3
      </NavLink>
    </>
  );
}
