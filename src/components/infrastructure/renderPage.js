import * as Ons from 'react-onsenui';
import React from 'react';
import renderToolbar from './renderToolbar';

export default function renderPage(route, navigator) {
  return (
    <Ons.Page
      key={route.title}
      {...(route.showToolbar !== false ? { renderToolbar: () => renderToolbar(route, navigator) } : {})}
    >
      <route.component navigator={navigator} />
    </Ons.Page>
  );
}
