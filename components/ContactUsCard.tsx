
export default function ContactUsCard(props: any) {
    return (
        <div className="flex w-full max-w-xs flex-col items-center rounded-2xl bg-white p-5 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <img
                className="mb-5 h-36 w-36 rounded-full border-4 border-slate-100 object-cover"
                src={props.image?.src || props.image || "/images/contactUsDemoImage.jpg"}
                alt="profile"
            />
            <div className="flex w-full flex-col items-center text-center">
                <div className="mb-4 font-display text-xl font-bold text-indigo-900">{props.name}</div>
                <div className="flex w-full flex-col items-center gap-3">
                    <a className="flex w-full max-w-[200px] items-center justify-center gap-2 truncate text-sm font-medium text-slate-600 transition-colors hover:text-indigo-900" href={props.linkedIn} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-lg text-blue-600" aria-hidden="true"></i>
                        LinkedIn Profile
                    </a>
                    <a className="flex w-full max-w-[200px] items-center justify-center gap-2 truncate text-sm font-medium text-slate-600 transition-colors hover:text-indigo-900" href={`mailto:${props.email}`}>
                        <i className="fas fa-envelope text-lg text-red-500" aria-hidden="true"></i>
                        {props.email}
                    </a>
                    <a className="flex w-full max-w-[200px] items-center justify-center gap-2 truncate text-sm font-medium text-slate-600 transition-colors hover:text-indigo-900" href={`tel:${props.phone}`}>
                        <i className="fa fa-phone text-lg text-green-500" aria-hidden="true"></i>
                        {props.phone}
                    </a>
                </div>
            </div>
        </div>
    );
}
