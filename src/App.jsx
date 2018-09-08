import React, {Component} from 'react';
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl';
import * as translations from './translations';

// import { scroller, animateScroll } from 'react-scroll';
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import bg from 'react-intl/locale-data/bg';
import cs from 'react-intl/locale-data/cs';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import hi from 'react-intl/locale-data/hi';
import id from 'react-intl/locale-data/id';
import it from 'react-intl/locale-data/it';
import ja from 'react-intl/locale-data/ja';
import ko from 'react-intl/locale-data/ko';
import nl from 'react-intl/locale-data/nl';
import no from 'react-intl/locale-data/no';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import ro from 'react-intl/locale-data/ro';
import ru from 'react-intl/locale-data/ru';
import tr from 'react-intl/locale-data/tr';
import uk from 'react-intl/locale-data/uk';
import vi from 'react-intl/locale-data/vi';
import zh from 'react-intl/locale-data/zh';


addLocaleData([
    ...en,
    ...ar,
    ...bg,
    ...cs,
    ...de,
    ...es,
    ...fr,
    ...hi,
    ...id,
    ...it,
    ...ja,
    ...ko,
    ...nl,
    ...no,
    ...pl,
    ...pt,
    ...ro,
    ...ru,
    ...tr,
    ...uk,
    ...vi,
    ...zh,
]);


export default function App() {
    const {language} = navigator;

    return (

        <IntlProvider
            locale={language}
            messages={translations.en}
            defaultLocale={'en'}
        >
            <div>
                <Nav/>
                <Welcome/>
                <About/>
                <Projects/>
                <Team/>
                <Footer/>
            </div>
        </IntlProvider>

    );

}



