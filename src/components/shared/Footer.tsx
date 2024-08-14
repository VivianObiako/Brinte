import Image from 'next/image';
import FooterBG from "@/assets/Wordmark.svg";
import FooterLogo from "@/assets/Brinte-Icon.svg";
import { FOOTER_SECTIONS } from '@/utils/constants/variables';
import CustomLink from '../common/CustomLink';
import Indicator from"@/assets/Indicator.svg";

const Footer = () => {
    return (
        <footer className='bg-bg-overlay w-full pt-24 lg:pt-[240px]'>
            <div>
                <div className='brite_wrapper max-w-[854px] '>
                    <div className='flex justify-center gap-8 flex-col md:flex-row md:justify-between items-start pb-8 border-b border-b-border-light mb-8'>
                        <div className='flex-shrink-0'>
                            <Image src={FooterLogo} alt="Brinte logo Icon" />
                        </div>
                        {FOOTER_SECTIONS && (
                            <nav className='flex flex-col gap-8 md:flex-row flex-shrink-0'>
                                {FOOTER_SECTIONS.map((section)=> (
                                    <div key={section.id} className='w-[139px]'>
                                        <h5 className='text-xs leading-[18px] text-text-subdued font-medium mb-6'>{section.name}</h5>
                                        <ul className='flex flex-col gap-6'>
                                            {section.links.map((link, index)=>(
                                                <li key={index}>
                                                    <CustomLink href={link.route} className='text-[13px] text-text-label leading-[20px]'>
                                                        <div className='flex gap-3'>
                                                            {link.icon && (
                                                                <div className='w-4 h-4'>
                                                                    <Image src={link.icon} alt={link.name} />
                                                                </div>
                                                            )}
                                                            {link.name}
                                                        </div>
                                                    </CustomLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </nav>
                        )}
                    </div>
                    <div className='flex justify-between items-center mb-8 md:mb-16'>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <Image src={Indicator} alt="green indicator" />
                            </div>
                            <p className='text-text-label font-medium text-[13px] leading-[20px]'>All systems operational</p>
                        </div>
                        <p className='text-text-secondary text-[13px] leading-[20px]'>© Brinte 2024</p>
                    </div>
                </div>
                <div className='w-full max-w-[1360px] px-4 mx-auto'>
                    <Image src={FooterBG} alt="halfed Brinte text"  />
                </div>
            </div>
        </footer>
    )
}

export default Footer