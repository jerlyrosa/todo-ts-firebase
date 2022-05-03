import Header from './header';
import { PropsChildrenType, } from './types/types'


export default function Layout({ children }: PropsChildrenType):JSX.Element {
    return (
      <div>
       {children}
  
      </div>
    );
  }