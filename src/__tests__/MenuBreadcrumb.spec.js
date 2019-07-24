import MenuBreadcrumb from '../views/pages/DogsPage/components/MenuBreadcrumb';

describe('MenuBreadcrumb component', () => {
  it('should call handleClickCategory', () => {
    expect(MenuBreadcrumb.propTypes.handleClickCategory).toBeDefined();
  });
});
