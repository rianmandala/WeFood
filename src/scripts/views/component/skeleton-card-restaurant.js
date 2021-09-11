class SkeletonCardRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .skeleton-card {
          position: relative;
          overflow: hidden;
          box-shadow: 0 3px 8px 3px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding-bottom: 16px;
        }
        .skeleton-card .content {
          padding: 6px 16px 16px 16px;
        }
        .skeleton-title{
          margin:6px 0;
        }
        .skeleton-description{
          margin:4px 0;
        }
      </style>
      <section class="skeleton-card restaurant-item">
        <div class="image">
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img src="./images/placeholder.webp" width="100%" height="240px"
              alt="skeleton"/>
          </picture>
        </div>
        <div class="content">
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img class="skeleton-title" 
              src="./images/placeholder.webp" width="60%" height="24px"
              alt="skeleton"/>
          </picture>
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img class="skeleton-description" 
              src="./images/placeholder.webp" width="100%" height="16px"
              alt="skeleton"/>
          </picture>
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img class="skeleton-description" 
              src="./images/placeholder.webp" width="100%" height="16px"
              alt="skeleton"/>
          </picture>
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img class="skeleton-description" 
              src="./images/placeholder.webp" width="100%" height="16px"
              alt="skeleton"/>
          </picture>
          <picture>
            <source type="image/webp" srcset="./images/placeholder.webp">
            <source type="image/png" srcset="./images/placeholder.png">
            <img class="skeleton-description" 
              src="./images/placeholder.webp" width="100%" height="16px"
              alt="skeleton"/>
          </picture>
        </div>
      </section>
    `;
  }
}

customElements.define('skeleton-card-restaurant', SkeletonCardRestaurant);
