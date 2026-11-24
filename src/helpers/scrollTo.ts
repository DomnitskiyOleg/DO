export function scrollToBlock(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth', // плавная прокрутка
        block: 'start', // прокрутка к верхней части элемента
    });
}
