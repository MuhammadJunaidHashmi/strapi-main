import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    description: 'About section component';
    displayName: 'About';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'shared.stat', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAugmentation extends Struct.ComponentSchema {
  collectionName: 'components_sections_augmentations';
  info: {
    description: 'Augmentation section component';
    displayName: 'Augmentation';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_sections';
  info: {
    description: 'Blog section component';
    displayName: 'Blog Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    posts: Schema.Attribute.Component<'shared.blog-post', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_details';
  info: {
    displayName: 'contactDetails';
  };
  attributes: {
    address: Schema.Attribute.String;
    contactEmail: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_forms';
  info: {
    description: 'Contact form section component';
    displayName: 'Contact Form';
  };
  attributes: {
    contactDetails: Schema.Attribute.Component<
      'sections.contact-details',
      false
    >;
    fields: Schema.Attribute.JSON & Schema.Attribute.Required;
    interestOptions: Schema.Attribute.JSON & Schema.Attribute.Required;
    submitText: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Call to Action section component';
    displayName: 'CTA';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    contactEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    contactPhone: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_sections_get_starteds';
  info: {
    displayName: 'Get Started';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero section component';
    displayName: 'Hero';
  };
  attributes: {
    backgroundVideoUrl: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_we_works';
  info: {
    description: 'How We Work section component';
    displayName: 'How We Work';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsOurClient extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_clients';
  info: {
    displayName: 'Our client';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionsPillars extends Struct.ComponentSchema {
  collectionName: 'components_sections_pillars';
  info: {
    description: 'Pillars section component';
    displayName: 'Pillars';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'shared.pillar-section', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPoweredBy extends Struct.ComponentSchema {
  collectionName: 'components_sections_powered_bies';
  info: {
    description: 'Powered By section component';
    displayName: 'Powered By';
  };
  attributes: {
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    description: 'Testimonials section component';
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.Component<'shared.author', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors';
  info: {
    description: 'Author information with name and role';
    displayName: 'Author';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_posts';
  info: {
    description: 'Blog post preview with title, description and URL';
    displayName: 'Blog Post';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPillarSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_pillar_sections';
  info: {
    description: 'A pillar section with title and description';
    displayName: 'Pillar Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    description: 'A statistical data point with label and value';
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about': SectionsAbout;
      'sections.augmentation': SectionsAugmentation;
      'sections.blog-section': SectionsBlogSection;
      'sections.contact-details': SectionsContactDetails;
      'sections.contact-form': SectionsContactForm;
      'sections.cta': SectionsCta;
      'sections.get-started': SectionsGetStarted;
      'sections.hero': SectionsHero;
      'sections.how-we-work': SectionsHowWeWork;
      'sections.our-client': SectionsOurClient;
      'sections.pillars': SectionsPillars;
      'sections.powered-by': SectionsPoweredBy;
      'sections.testimonials': SectionsTestimonials;
      'shared.author': SharedAuthor;
      'shared.blog-post': SharedBlogPost;
      'shared.media': SharedMedia;
      'shared.pillar-section': SharedPillarSection;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stat': SharedStat;
    }
  }
}
