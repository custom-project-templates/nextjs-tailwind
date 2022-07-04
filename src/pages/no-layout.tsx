
const NoLayoutPage: NextPageWithLayout = () => {
  return (
    <div>
      <div>This page has no layout</div>
    </div>
  );
};

NoLayoutPage.getLayout = function getLayout(page) {
  return page
}
export default NoLayoutPage;
