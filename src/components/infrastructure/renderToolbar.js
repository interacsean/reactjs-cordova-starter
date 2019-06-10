import * as Ons from 'react-onsenui';
import React from 'react';

export default function renderToolbar(route, navigator) {
  const backButton = route.hasBackButton ? (
    <Ons.BackButton onClick={() => navigator.popPage()}>Back</Ons.BackButton>
  ) : null;

  return (
    <Ons.Toolbar>
      <div className="left">{backButton}</div>
      <div className="center">{route.title}</div>
    </Ons.Toolbar>
  );
}
