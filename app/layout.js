import "./globals.css";
import ToasterContext from './context/ToasterContext'
import { Dashboard, Footer, InfoBar, Menu, Navbar, Navigation, Provider }from "./components";
export const metadata = {
  title: "Wohntraum Andalusia",
  description: "Landingpage",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ToasterContext />
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
          <Navigation/>
        <InfoBar/>                                                                                                                ,
        
            
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;