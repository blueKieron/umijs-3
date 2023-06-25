import Menu from '@/components/meau';

export default function AsideLayouts(props) {
  return (
    <>
      <div>AsideLayouts</div>
      <div>
        <Menu></Menu>
        { props.children }
      </div>
    </>
  );
}
