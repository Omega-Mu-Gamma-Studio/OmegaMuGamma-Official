import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';

/**
 * Applies a "focus" treatment based on how close an element is to the
 * vertical center of the viewport: the nearest section scales up and
 * sharpens, while sections further away blur and dim slightly — giving
 * the page a sense of foreground/background as the user scrolls.
 *
 * Usage: <section appScrollFocus> ... </section>
 * Pairs with the [data-scroll-focus] rule in styles.scss, which reads
 * the --focus-scale / --focus-blur / --focus-opacity custom properties
 * this directive writes on the host element.
 *
 * Fully inert when the user has `prefers-reduced-motion: reduce` set.
 */
@Directive({
  selector: '[appScrollFocus]',
  standalone: true,
  host: {
    '[attr.data-scroll-focus]': "''",
  },
})
export class ScrollFocusDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  private ticking = false;
  private reduceMotion = false;

  private readonly onScroll = () => this.requestTick();
  private readonly onResize = () => this.requestTick();

  ngOnInit(): void {
    this.reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (this.reduceMotion) {
      return;
    }

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
    this.update();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  private requestTick(): void {
    if (this.ticking || this.reduceMotion) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  }

  private update(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elCenter = rect.top + rect.height / 2;
    const distance = Math.abs(elCenter - viewportCenter);
    const maxDistance = window.innerHeight / 2 + rect.height / 2;
    const t = Math.min(distance / Math.max(maxDistance, 1), 1); // 0 = centered, 1 = fully off-screen

    const scale = (1.02 - t * 0.08).toFixed(4);
    const blur = (t * 8).toFixed(2);
    const opacity = (1 - t * 0.5).toFixed(3);

    const host = this.el.nativeElement;
    this.renderer.setStyle(host, '--focus-scale', scale);
    this.renderer.setStyle(host, '--focus-blur', `${blur}px`);
    this.renderer.setStyle(host, '--focus-opacity', opacity);
  }
}
