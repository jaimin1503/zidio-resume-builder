import React, { useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
    const faqRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    return (
        <section className="faq-section" ref={faqRef}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
            <div className="faq">
                <h3>Is the resume builder free to use?</h3>
                <p>Yes, it is free to use with basic features. Premium features are available at a small cost.</p>
            </div>
            <div className="faq">
                <h3>Can I edit my resume after downloading it?</h3>
                <p>Yes, you can edit your resume anytime by logging into your account.</p>
            </div>
            <div className="faq">
                <h3>What formats can I download my resume in?</h3>
                <p>You can download your resume in PDF, Word, and other formats.</p>
            </div>
            <div className="faq">
                <h3>Do I need an account to use the resume builder?</h3>
                <p>No, you can create a resume without an account. However, creating an account allows you to save and edit your resume later.</p>
            </div>
            <div className="faq">
                <h3>Are there any limitations to the free version?</h3>
                <p>The free version includes basic templates and features. The premium version offers more templates and advanced customization options.</p>
            </div>
        </div>
    </section>
    );
}

export default FAQ;
