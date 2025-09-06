const renderBullet = (_: number, className: string) => {
  return `
    <span class="!w-4 !h-4 !inline-block !rounded-full !bg-primary-foreground !opacity-100 ${className}"></span>
  `;
};

const PaginationBullet = () => {
  return (
    <div
      className="m-auto block text-center mt-4 space-x-2"
      id="swiper-custom-pagination"
    />
  );
};

export { renderBullet, PaginationBullet };
