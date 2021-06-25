//=== UqApp builder created on Tue Jan 05 2021 18:41:24 GMT-0500 (GMT-05:00) ===//
import { VPage, TabProp, TabCaptionComponent, t, TabsProps, PageWebNav } from 'tonva-react';
import { CApp } from './CApp';

const color = (selected: boolean) => selected === true ? 'text-primary' : 'text-muted';
function caption(label: string | JSX.Element, icon: string) {
    return (selected: boolean) => TabCaptionComponent(label, icon, color(selected));
}

export class VMain extends VPage<CApp> {
    protected get tabsProps(): TabsProps {
        let { /* cHome, */ cBug, cMe, cUI, cUser } = this.controller;
        let tabs: TabProp[] = [
            // { name: 'home', caption: caption(t('home'), 'home'), content: cHome.tab },
            { name: '中石化', caption: caption(t('中石化'), 'user'), content: ()=> cUser.tab('epec') },
            { name: '药物所/中山院', caption: caption(t('药物所/中山院'), 'user'), content: ()=> cUser.tab('notd') },
            { name: 'me', caption: caption(t('me'), 'user-o'), content: cMe.tab, load: cMe.load },
        ];
        if (this.isDev === true) {
            tabs.push({
                name: 'UI', caption: caption(t('UI'), 'television'), content: cUI.tab
            });
            tabs.push({
                name: 'debug', caption: caption(t('debug'), 'bug'), content: cBug.tab, onShown: cBug.load
            });
        }
        return { tabs };
    }

    protected get webNav(): PageWebNav {
        return {
            navHeader: <div>webNav header</div>,
            navFooter: <div>webNav footer</div>,
        };
    }
}
