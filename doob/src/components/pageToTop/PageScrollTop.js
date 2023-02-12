import { useEffect } from "react";

import { useNavigate } from 'react-router';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}
const PageScrollTop = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return props.children;
};
export default withRouter(PageScrollTop);