import {Component} from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';
import {LayoutService} from "../../../../layout/service/app.layout.service";

@Component({
  templateUrl: './profile.settings.component.html',
  providers: [MessageService, ConfirmationService]
})
export class ProfileSettingsComponent {

  constructor(public layoutService: LayoutService) {
  }

  get colorScheme(): string {
    return this.layoutService.config.colorScheme;
  }

  set colorScheme(_val: string) {
    this.changeColorScheme(_val);
  }

  changeColorScheme(colorScheme: string) {
    const themeLink = <HTMLLinkElement>document.getElementById('theme-link');
    const themeLinkHref = themeLink.getAttribute('href');
    const currentColorScheme = 'theme-' + this.layoutService.config.colorScheme;
    const newColorScheme = 'theme-' + colorScheme;
    const newHref = themeLinkHref!.replace(currentColorScheme, newColorScheme);
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }

  changeTheme(theme: string) {
    const themeLink = <HTMLLinkElement>document.getElementById('theme-link');
    const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.onConfigUpdate();
    });
  }

  replaceThemeLink(href: string, onComplete: Function) {
    const id = 'theme-link';
    const themeLink = <HTMLLinkElement>document.getElementById(id);
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
}
