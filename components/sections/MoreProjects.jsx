import React from 'react';

import { useTranslation } from 'react-i18next';
import MoreProjectsGrid from '../MoreProjectsGrid';
import SectionContainer from '../SectionContainer';

export default function MoreProjects() {
  const { i18n } = useTranslation();

  return (
    <SectionContainer
      id="more-projects"
      name="more-projects"
      headerText={
        i18n.resolvedLanguage === 'pt' ? 'Mais Projetos' : 'More Projects'
      }
      useHeaderStyle
    >
      <MoreProjectsGrid />
    </SectionContainer>
  );
}
