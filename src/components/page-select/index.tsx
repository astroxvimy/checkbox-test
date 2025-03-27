import { useState } from 'react';
import Button from '../common/button';
import Checkbox from '../common/checkbox';
import Hr from '../common/divider/hr';
import './index.css';

type Page = {
  name: string;
  key: 'page1' | 'page2' | 'page3' | 'page4';
};

const Pages: Page[] = [
  { name: 'Page 1', key: 'page1' },
  { name: 'Page 2', key: 'page2' },
  { name: 'Page 3', key: 'page3' },
  { name: 'Page 4', key: 'page4' },
];

const PageSelect = () => {
  const [allChecked, setAllChecked] = useState(false);

  const toggleAll = () => {
    setAllChecked((prevAllChecked) => !prevAllChecked);
  };
  return (
    <div className="page-select">
      <div className="page-select-item">
        <label>All Pages</label>
        <Checkbox checked={allChecked} onChange={toggleAll} />
      </div>
      <Hr />
      <div className="page-select-itmes">
        {Pages.map((page) => (
          <div key={page.key} className="page-select-item">
            <label>{page.name}</label>
            <Checkbox key={page.key} checked={allChecked} />
          </div>
        ))}
      </div>
      <Hr />
      <Button text="Done" />
    </div>
  );
};
export default PageSelect;
