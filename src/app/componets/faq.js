"use client"
import React, {useReducer} from 'react'
import { Link as Link2 } from 'react-scroll';
import { accordionData } from '../Data/dataTwo';

export default function Faq(){
    const initialState = {
        activeIndex: 0,
        activeGeneral: 0,
        activePayment: 0,
        activeSupport: 0
    };

    const toggleAccordion = (category, index) => {
        dispatch({ type: 'SELECT_CATEGORY', payload: { category: category, index: index } });
    };

    const reducerMethod = (state, action) => {
        switch (action.payload.category) {
            case 'active':
                return {
                    ...state,
                    activeIndex: action.payload.index
                };
            case 'general':
                return {
                    ...state,
                    activeGeneral: action.payload.index
                };
            case 'payments':
                return {
                    ...state,
                    activePayment: action.payload.index
                };
            case 'support':
                return {
                    ...state,
                    activeSupport: action.payload.index
                };
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducerMethod, initialState);
    return(
        <div className="container relative md:pb-24 pb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                            <ul className=" list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link2 to="tech"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="general"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">General Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="payment"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="support"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">Support Questions</Link2></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 className="text-2xl font-semibold">Buying Product</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {accordionData.slice(0,4).map((item, index) => (
                                    <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button onClick={() => toggleAccordion('active', index)} type="button"
                                                className={`${state.activeIndex === index ? 'flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600' : 'flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white'}`}
                                    >
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${state.activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {state.activeIndex === index && (
                                            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="general" className="mt-8">
                            <h5 className="text-2xl font-semibold">General Questions</h5>

                            <div id="accordion-collapsetwo" data-accordion="collapse" className="mt-6">
                                {accordionData.slice(0,4).map((item, index) => (
                                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                        <h2 className="text-base font-medium">
                                            <button onClick={() => toggleAccordion('general', index)} type="button" className={`${state.activeIndex === index ? 'flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600' : 'flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white'}`}>
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${state.activeIndex === index ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {state.activeGeneral === index && (
                                            <div aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="payment" className="mt-8">
                            <h5 className="text-2xl font-semibold">Payments Questions</h5>

                            <div id="accordion-collapsethree" data-accordion="collapse" className="mt-6">
                                {accordionData.slice(0,4).map((item, index) => (
                                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                        <h2 className="text-base font-medium">
                                            <button onClick={() => toggleAccordion('payments', index)} type="button" className={`${state.activeIndex === index ? 'flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600' : 'flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white'}`}>
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${state.activeIndex === index  ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {state.activePayment === index && (
                                            <div aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="support" className="mt-8">
                            <h5 className="text-2xl font-semibold">Support Questions</h5>

                            <div id="accordion-collapsefour" data-accordion="collapse" className="mt-6">
                                {accordionData.slice(0,4).map((item, index) => (
                                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                        <h2 className="text-base font-medium">
                                            <button onClick={() => toggleAccordion('support', index)} type="button" className={`${state.activeIndex === index ? 'flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-indigo-600' : 'flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white'}`}>
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${state.activeIndex === index  ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {state.activeSupport === index && (
                                            <div aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}