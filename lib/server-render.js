import React from 'react';
import ReactDOMServer from 'react-dom/server';
import RootApp from './../components/app';

const serverRender = () => ReactDOMServer.renderToString(<RootApp />);
export default serverRender;
