
// temp while component jsx is defined in here
import './App.css';
import logo from './logo.svg';
import React from 'react';

const routes = {
  home: {
    title: "MyImpact",
    showToolbar: true,
    component: p => (
      <div>
        <p onClick={() => p.navigator.pushPage(routes.page1)}>Page1</p>
      </div>
    )
  },
  page1: {
    title: "Page 1",
    showToolbar: true,
    hasBackButton: true,
    component: p => (
      <div>
        <p onClick={() => p.navigator.popPage(routes.home)}>Back to home</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales magna quis tincidunt consequat. Proin faucibus imperdiet arcu, vitae lobortis purus pharetra quis. Maecenas scelerisque dictum fermentum. Nam mattis venenatis mi ut fermentum. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque condimentum dui sed augue ultricies tristique. Fusce placerat non massa ut gravida. Ut laoreet, ex quis dignissim bibendum, elit eros congue odio, sit amet luctus magna est eu ex. Curabitur faucibus, neque sed ullamcorper imperdiet, purus sapien tempor eros, in consequat libero lacus tempor mi.
        </p><p>
        <img src={logo} className="App-logo" />
        </p><p>
        Aliquam eget laoreet est, eget ultrices mi. Ut facilisis felis sit amet augue tristique, non auctor augue semper. Vestibulum eu tellus in dolor fermentum feugiat eu tincidunt odio. Quisque eu libero a nulla dignissim rutrum. Sed posuere libero rhoncus tempus mattis. Aliquam erat volutpat. Suspendisse porttitor mauris vitae nulla venenatis, non hendrerit ex facilisis. Nunc id metus in enim feugiat consectetur vel quis justo. Aliquam erat volutpat. Pellentesque sed dolor sem. Donec malesuada sapien feugiat purus interdum consequat. Cras hendrerit, ligula sed iaculis vestibulum, orci nunc laoreet ipsum, id sagittis quam ipsum ut metus.
        </p><p>
        Aenean tincidunt ante elementum nulla sodales, at malesuada ex condimentum. Ut tempus eget nisi sagittis porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pretium diam vitae justo pellentesque, a condimentum urna condimentum. Suspendisse sit amet lacus suscipit, elementum felis quis, interdum odio. In hendrerit eget arcu ut feugiat. Cras sed enim iaculis, luctus urna id, tincidunt purus. Suspendisse potenti. Curabitur vel ipsum ligula.
        </p><p>
        Etiam vitae nulla feugiat, mattis tellus sed, condimentum nisi. Proin imperdiet tellus purus, quis cursus neque commodo quis. Mauris id neque malesuada, lacinia felis at, aliquet tortor. Nunc convallis nibh non ante viverra, quis molestie ipsum suscipit. Donec eget fermentum metus, vel volutpat justo. Sed vestibulum fermentum finibus. Nam posuere rutrum varius. Donec non suscipit nisi, eu rhoncus magna.
        </p><p>
        Proin nibh ante, posuere et felis quis, auctor egestas turpis. Cras molestie aliquam efficitur. Cras nec elementum ligula, quis hendrerit quam. Cras vitae euismod justo. Sed imperdiet nisl risus, eu ultricies est auctor non. Suspendisse sit amet nunc et purus tincidunt viverra in ut arcu. Cras a lacus vitae arcu fringilla aliquam. Fusce at arcu velit. Aliquam tincidunt eros nec lectus tempor aliquet. Curabitur libero tellus, feugiat nec ex eu, lobortis posuere leo.</p>
      </div>
    )
  }
};

export default routes;