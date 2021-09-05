import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
// import TeamIllustrationSrc from "../images/team-illustration-2.svg";
import TeamIllustrationSrc from "../images/TodoList.svg";
import { ReactComponent as SvgDotPattern } from "../images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/compass.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/clock.svg";

const Container = tw.div`relative bg-primary-900 w-full`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center ml-8`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative pr-6 pl-6`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(
  SubheadingBase
)`text-center md:text-left text-primary-600 font-black`;
const Heading = tw(
  SectionHeading
)`mt-4 text-primary-500 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center text-primary-700`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

function TwoColHorizontalFeatures({
  subheading = "TOOL NUMBER ONE",
  heading = (
    <>
      Have A Clear <span tw="text-primary-600">Agenda.</span>
    </>
  ),
  description = (
    <>
      The main purpose of the agenda is to help students organize and schedule
      their busy lives, <strong>WE MAKE IT EASY FOR THEM!</strong>
    </>
  ),
  primaryButtonText = "Get Started",
  primaryButtonUrl = "/signup",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) {
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Create Tasks",
      description:
        "Create tasks with ease inside a specific project to stay organized!",
      iconContainerCss: tw`bg-teal-300 text-teal-800`,
    },
    {
      Icon: MoneyIcon,
      title: "Stay Organized",
      description:
        "By setting tasks to a specific time frame, you will be on top of your work at all times!",
      iconContainerCss: tw`bg-red-300 text-red-800`,
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      {<feature.Icon />}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

            {/* <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
}

export default TwoColHorizontalFeatures;